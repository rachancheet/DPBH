import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";

function parseEasyList(requests) {
  // const blockedDomains = easyListText;

  // console.log("blockeddomains", blockedDomains);
  console.log("requestss", requests);
  let data = {};

  for (let i = 0; i < requests.length; i++) {
    const requestDomain = String(new URL(requests[i]).hostname);
    let tmp = requestDomain.split(".");
    tmp.shift();
    tmp = tmp.join(".");
    console.log(tmp);

    // if (blockedDomains.includes(tmp)) {
    if (data[tmp]) {
      data[tmp] += 1;
    } else {
      data[tmp] = 1;
    }
    // }
  }
  console.log("=============blocking", data);
  return data;
}

export default function Launch() {
  let brw = null;
  if (typeof chrome !== "undefined" && chrome.runtime) {
    brw = chrome;
  } else if (typeof browser !== "undefined" && browser.runtime) {
    brw = browser;
  }

  const {
    setStages,
    setFaviconUrl,
    setImages,
    setText,
    setPageTitle,
    setUrls,
  } = useContext(GlobalContext);
  function retry() {
    brw.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // setStages(0);
      brw.tabs.sendMessage(
        tabs[0].id,
        { message: "getPage" },
        function (response) {
          // console.log("getPagee : ", response);
          console.log("abcd", response);
          var data = JSON.parse(response);
          setText(data);
        }
      );
    });
  }
  useEffect(() => {
    const id = setTimeout(() => {
      brw.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        setStages(0);
        // uncheck checkbox
        brw.tabs.sendMessage(
          tabs[0].id,
          { message: "uncheck" },
          (response) => {}
        );
        brw.tabs.sendMessage(
          tabs[0].id,
          { message: "getPage" },
          function (response) {
            // console.log("getPagee : ", response);
            if (typeof response == "undefined") {
              retry();
            } else {
              console.log("abcd", response);
              var data = JSON.parse(response);
              setText(data);
            }
          }
        );
        brw.tabs.sendMessage(
          tabs[0].id,
          { message: "image" },
          function (response) {
            // console.log(response);
            if (typeof response == "undefined" && response.length == 0) {
              setStages(2);
            }
            setImages(response);
          }
        );
        brw.tabs.sendMessage(
          tabs[0].id,
          { message: "favicon" },
          function (response) {
            // console.log(response);
            setFaviconUrl(response);
          }
        );
        brw.tabs.sendMessage(
          tabs[0].id,
          { message: "title" },
          function (response) {
            // console.log(response);
            setPageTitle(response);
          }
        );
      });
    }, 10000);
    const id2 = setTimeout(() => {
      console.log("======================sending message");
      brw.runtime.sendMessage({ message: "getData" }, function (response) {
        console.log("got responce from background", response);

        const a = parseEasyList(response);
        console.log(a);
        setUrls(a);
      });
    }, 20000);

    return () => {
      clearTimeout(id);
      clearTimeout(id2);
    };
  }, []);
  return <></>;
}
