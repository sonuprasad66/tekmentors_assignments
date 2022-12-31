import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCSVDownloader } from "react-papaparse";

export const DisplayData = ({ data }) => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const [result, setResult] = useState();

  data?.forEach((elem) => {
    if (elem[2].trim() == 0) {
      let r = (elem[1] * 5) / 100;
      elem.push(r);
    } else if (elem[2].trim() == 1) {
      let r = (elem[1] * 8) / 100;
      elem.push(r);
    } else if (elem[2].trim() == 2) {
      let r = (elem[1] * 12) / 100;
      elem.push(r);
    } else if (elem[2].trim() == "item_type") {
      elem.push("tax");
    } else {
      elem.push("Not Calculated");
    }
  });

  return (
    <>
      <CSVDownloader
        filename={"result"}
        bom={true}
        config={{
          delimiter: ";",
        }}
        data={data}
      >
        <Button mt={"10px"} w={"full"} colorScheme={"blue"}>
          Download Result With Calculated Tax
        </Button>
      </CSVDownloader>
    </>
  );
};
