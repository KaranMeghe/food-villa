import { ShimmerPostList } from "../../node_modules/react-shimmer-effects/dist/index";
function ShimmerUi() {
  return (
    <div className="m-5">
      <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={3} gap={30} />;
    </div>
  );
}
export default ShimmerUi;
