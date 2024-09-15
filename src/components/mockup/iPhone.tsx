interface IPhoneProps {
  children?: JSX.Element
}

const IPhone = (props: IPhoneProps) => {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[2.5rem] h-[300px] w-[150px]">

      <div className="h-[16px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -start-[8.5px] top-[36px] rounded-s-lg"></div>

      <div className="h-[21.5px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -start-[8.5px] top-[62px] rounded-s-lg"></div>

      <div className="h-[21.5px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -start-[8.5px] top-[89px] rounded-s-lg"></div>

      <div className="h-[32px] w-[1.5px] bg-gray-800 dark:bg-gray-800 absolute -end-[8.5px] top-[71px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[136px] h-[286px] bg-white dark:bg-gray-800">
        <div className="w-[136px] h-[286px]">
          {props.children}
        </div>
      </div>
    </div >

  )
}

export default IPhone;
