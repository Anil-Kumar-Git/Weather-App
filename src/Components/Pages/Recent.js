import React, { useState } from "react";
import { Segment, Button, Confirm, Pagination } from "semantic-ui-react";

const Recent = ({ recent, dataForResult }) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState({});

  // console.log(recent,"recent")

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
      <div class="container">
        <div class="row">
            <div class="col-6 bg-primary p-3">
                City Name
            </div>
            <div class="col-6 bg-warning p-3">
                Time
            </div>
        </div>
    </div>
      <Button.Group fluid vertical>
        {recent?.map((item) => {
          return (
            <>
              <Button basic onClick={() => modalItem(item)}>
                <b>{item.name}</b><p>{item.date}</p>
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
