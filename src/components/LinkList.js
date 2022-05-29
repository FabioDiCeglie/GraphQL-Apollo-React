import React from "react";
import Link from "./Link";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "../graphql/query";

const LinkList = () => {
  const { error, loading, data } = useQuery(FEED_QUERY);

  if (error) return;
  if (loading) return "Loading";

  return (
    <div>
      {data.feed.links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
