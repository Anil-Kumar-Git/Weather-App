import React, { useState } from "react";
import { Segment, Button, Confirm, Pagination } from "semantic-ui-react";

const Recent = ({ recent, dataForResult }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});

  const modalItem = (item) => {
    setOpen(true);
    setContent(item);
  };
  const previesWeather = (event) => {
    setOpen(false);
    dataForResult(event, "pre");
  };
  const letesstWeather = (event) => {
    setOpen(false);
    dataForResult(event, "let");
  };
  return (
    <Segment>
      <h3>Recent Search ...</h3>
      <Button.Group fluid vertical>
        {recent.map((item) => {
          return (
            <>
              <Button basic onClick={() => modalItem(item)}>
                <b>{item.name}</b>
              </Button>
            </>
          );
        })}
      </Button.Group>
      <Confirm
        open={open}
        content={
          content.name + " and remember by Defalt show you previous data"
        }
        onCancel={() => previesWeather(content)}
        cancelButton="Previes Weather"
        onConfirm={() => letesstWeather(content.name)}
        confirmButton="Letest Weather"
      />
      <Pagination
        defaultActivePage={1}
        firstItem={null}
        lastItem={null}
        pointing
        secondary
        totalPages={3}
      />
    </Segment>
  );
};

export default Recent;
