import { User } from "../entity/User";

export const getUser = async ({ column, value }) => {
  try {
    let user = await User.createQueryBuilder("user")
      .where(`user.${column} = :value`, { value })
      .getOne();
    return user;
  } catch (error) {
    console.log(error);
  }
};
