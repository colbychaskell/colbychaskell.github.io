const Link = (props: { className: string, text: string, to: string }) => {
  return (
    <>
      <a href={props.to}
        className={`${props.className} hover:bg-[#ffbd5e] hover:bg-opacity-10 hover:underline 
        hover:text-[#ffbd5e] text-[#ffbd5e] hover:cursor-pointer transition-transform duration-300`}>
        {props.text}
      </a>
      <sup className="leading-[0] font-[300] text-[#ffbd5e]">↗</sup>
    </>
  );
};

export default Link;
