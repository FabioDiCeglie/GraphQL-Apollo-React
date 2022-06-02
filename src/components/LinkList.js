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
      {data && (
        <>
          {data.feed.links.map((link, index) => (
            <Link key={link.id} link={link} index={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;
