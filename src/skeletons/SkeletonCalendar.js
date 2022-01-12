import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonCalendar = ({ theme }) => {
  const themeClass = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-calendar">
        <SkeletonElement type="title" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="button" />
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonCalendar;
