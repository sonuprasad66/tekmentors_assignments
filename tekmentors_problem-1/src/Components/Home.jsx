import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { useCSVReader, formatFileSize } from "react-papaparse";
import { DisplayData } from "../Pages/DownloadData";

export const Home = () => {
  const { CSVReader } = useCSVReader();
  const [data, setData] = useState([]);

  return (
    <Box w={"50%"} m={"50px auto"} textAlign={"center"}>
      <CSVReader
        onUploadAccepted={(results) => {
          // console.log(results);
          setData(results);
        }}
        onDragOver={(event) => {
          event.preventDefault();
        }}
      >
        {({
          getRootProps,
          acceptedFile,
          ProgressBar,
          getRemoveFileProps,
          Remove,
        }) => (
          <>
            <Box
              {...getRootProps()}
              p={"6"}
              alignItems="center"
              borderWidth={2}
              borderStyle="dashed"
              borderColor={"#CCC"}
              borderRadius={20}
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="center"
              padding={20}
            >
              {acceptedFile ? (
                <>
                  <Box
                    bg={"linear-gradient(to bottom, #EEE, #DDD)"}
                    borderRadius="20"
                    display="flex"
                    height={"120px"}
                    width={"120px"}
                    position="relative"
                    zIndex={1}
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Box
                      alignItems={"center"}
                      display={"flex"}
                      flexDirection={"column"}
                      paddingLeft={"10px"}
                      paddingRight={"10px"}
                    >
                      <Heading size={"sm"}>
                        {formatFileSize(acceptedFile.size)}
                      </Heading>
                      <Heading size={"sm"}>{acceptedFile.name}</Heading>
                    </Box>
                    <Box
                      bottom={"14px"}
                      position="absolute"
                      width={"100%"}
                      paddingLeft={"10px"}
                      paddingRight={"10px"}
                    >
                      <ProgressBar />
                    </Box>
                    <Box
                      {...getRemoveFileProps()}
                      height={"23px"}
                      position="absolute"
                      right={"6px"}
                      top={"6px"}
                      width={"23px"}
                    >
                      <Remove color={"#A01909"} />
                    </Box>
                  </Box>
                </>
              ) : (
                "Drop CSV file here or click to upload"
              )}
            </Box>
          </>
        )}
      </CSVReader>
      <DisplayData data={data.data} />
    </Box>
  );
};
