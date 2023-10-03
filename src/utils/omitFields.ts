export const omitFields = <T, K extends keyof Partial<T>>(
  users: T[],
  keys: K[]
): Array<Omit<T, K>> => {
  const omittedResult = users.map(user => {
    return Object.fromEntries(
      Object.entries(user as string[]).filter(
        ([key]) => !keys.includes(key as K)
      )
    );
  });

  return omittedResult as Array<Omit<T, K>>;
};

export const omitField = <T, K extends keyof T>(
  user: T,
  keys: K[]
): Omit<T, K> => {
  const result = Object.fromEntries(
    Object.entries(user as string).filter(([key]) => !keys.includes(key as K))
  );
  return result as Omit<T, K>;
};
