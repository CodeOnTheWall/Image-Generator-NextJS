export default async function Poop() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <div>Poop</div>;
}
