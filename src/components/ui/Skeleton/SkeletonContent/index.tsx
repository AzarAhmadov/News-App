import SkeletonLoad from "../SkeletonLoad";

export const AsideLinkSkeleton = () => {
  return (
    <div className="mb-[13px] flex items-center gap-x-2 ps-[27px]">
      <SkeletonLoad className="size-[35px] flex-shrink-0 rounded-full" />
      <SkeletonLoad className="h-[35px] w-full rounded-full" />
    </div>
  );
};

export const TitleSkeleton: React.FC = () => (
  <SkeletonLoad className="h-[40px] rounded-md" />
);

export const DescriptionSkeleton: React.FC = () => (
  <>
    <SkeletonLoad className="mb-2 h-[22px] rounded-md" />
    <SkeletonLoad className="mb-2 h-[22px] rounded-md" />
    <SkeletonLoad className="h-[22px] rounded-md" />
  </>
);

export const ImageSkeleton: React.FC = () => (
  <SkeletonLoad className="aspect-[1/1] h-[132px] rounded-md" />
);

export const InfoSkeleton: React.FC = () => (
  <SkeletonLoad className="h-[25px] w-full rounded-md" />
);
