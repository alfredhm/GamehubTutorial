import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="10" height="32px" />
      <SkeletonText noOfLines={1} skeletonHeight="5" width="100%" />
    </HStack>
  );
};

export default GenreSkeleton;
