import { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../helpers/api";

const Index: React.FC = () => {
  const [card, setCard] = useState(null);

  const { data, error, mutate } = useSWR("cards/random", fetcher);
  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (data) {
      setCard(data);
    } else {
      setCard(null);
    }
  }, [data]);

  return (
    card && (
      <>
        <h1>{card.name}</h1>
        <p>{card.oracle_text}</p>
      </>
    )
  );
};

export default Index;
