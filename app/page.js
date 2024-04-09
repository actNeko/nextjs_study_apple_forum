export default async function Home() {
  // await fetch("/url", { cache: "force-cache" });
  // 캐싱기능사용시
  // await fetch("/url", { cache: "no-store" });
  // 캐싱기능사용을 안하겠다
  // await fetch("/url", { next: {revalidate:60} });
  // 60초마다 캐싱데이터를 갱신
  return <div>안녕</div>;
}
