import { Col } from "react-bootstrap";
import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonCard = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <Col xs={12} sm={6} xl={3}>
      <div className={`skeleton-wrapper ${themeClass}`}>
        <div className="skeleton-card">
          <SkeletonElement type="title" />
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="button" />
        </div>
      </div>

      <Shimmer />
    </Col>
  );
};

export default SkeletonCard;
