import { useMemo } from "react";
import type { ProfileData } from "../../../../presentation/pages";

export const useGetProfile = () => {
  const profile = useMemo(() => {
    return {
      name: "John Smith",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1712651128~exp=1712651728~hmac=fb22911926717e19ceb210b9f83d7ed86721af3f3ae8020cfe1a1c410e0e67a8",
      globalProgress: 100, // %
      litterVerified: true,
      parentsVerified: true,
      profilePictureIsVerified: true,
      verified: true,
    } as ProfileData;
  }, []);

  return { profile };
};
