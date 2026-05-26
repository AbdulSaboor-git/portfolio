export default function Footer() {
  return (
    <footer
      className="border-t border-white/[0.05] px-[clamp(20px,6vw,80px)] py-7
      flex justify-center items-center text-center flex-wrap gap-3"
    >
      <div className="flex flex-col sm:flex-row text-[13px] text-slate-600 font-medium">
        © 2026 Abdul Saboor
        <span className="sm:border-l border-l-0 border-slate-600 sm:ml-2 sm:pl-2">
          abdulsaboor.contact@gmail.com
        </span>
      </div>
    </footer>
  );
}
