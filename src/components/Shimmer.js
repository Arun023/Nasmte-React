import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./../";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
      <div>
        <Skeleton width={350} height={250} />
        <div style={{ marginBottom: "10px" }}></div>
        <Skeleton count={5} height={10} width={350} />
      </div>
    </div>
  );
};

export default Shimmer;
