import { http, HttpResponse } from "msw";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const handlers = [
  http.post(`${baseUrl}/api/test`, () => {
    console.log("mock실행");
    return HttpResponse.json({
      id: "dung",
      nickname: "둥가리오스",
      image: "/images/dung.jpg",
      title: "둥이는 지금 피곤해",
    });
  }),
];
