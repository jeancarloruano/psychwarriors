import { BASE_PATH } from "@/lib/basePath";

export default function Head() {
  return (
    <>
      <link rel="icon" href={`${BASE_PATH}/favicon.ico`} type="image/svg+xml" />
    </>
  );
}

