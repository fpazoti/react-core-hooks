export default function Card({ children, title, description }) {
  return (
    <div className="p-4 bg-white rounded-3xl h-full min-h-[400px] max-w-[350px] space-y-4">
      <h1 className="font-bold text-2xl text-pallet-5">{title}</h1>
      <h2 className="text-sm text-pallet-4">{description}</h2>
      <div className="flex flex-col space-y-4 text-pallet-4">{children}</div>
    </div>
  );
}
