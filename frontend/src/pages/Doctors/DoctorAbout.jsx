import { formaterDate } from "../../utils/formaterDate"

const DoctorAbout = () => {
  return <div>
    <div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
          Marquez Waldir
        </span>
      </h3>
      <p className="text__para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptate qui error, corrupti repellendus nisi sed harum doloremque, animi saepe tenetur eos perferendis quae tempora temporibus impedit exercitationem ipsum totam. Obcaecati animi, maxime rem labore inventore sed aut dolorum, fugit totam voluptas ipsa! Quia, distinctio. Harum fuga voluptate debitis placeat?
      </p>
    </div>
    <div className="mt-12">
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
        Education
      </h3>

      <ul className='pt-4 md:p-5'>

        <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
          <div>
            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
              {formaterDate("02-17-2014")} - {formaterDate("01-30-2016")}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              PHD in Surgeon
            </p>
          </div>
          <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apollo Hospital, New York.
          </p>
        </li>

        <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
          <div>
            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
              {formaterDate("07-10-2010")} - {formaterDate("12-20-2013")}
            </span>
            <p className='text-[15px] leading-6 font-medium text-textColor'>
              PHD in Surgeon
            </p>
          </div>
          <p className='text-[14px] leading-5 font-medium text-textColor'>
            New Apollo Hospital, New York.
          </p>
        </li>
      </ul>
    </div>

    <div className="mt-12">
      <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
        Experience
      </h3>

      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">

          <span className="text-yelowColor text-[15px] leading-6 font-semibold">
            {formaterDate("07-10-2010")} - {formaterDate("12-20-2013")}
          </span>

          <p className='text-[16px] leading-6 font-medium text-textColor'>
            Sr. Surgeon
          </p>

          <p className='text-[14px] leading-5 font-medium text-textColor'>
              New Apollo Hospital, New York.
          </p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
          <span className="text-yelowColor text-[15px] leading-6 font-semibold">
            {formaterDate("07-10-2010")} - {formaterDate("12-20-2013")}
          </span>

          <p className='text-[16px] leading-6 font-medium text-textColor'>
            Sr. Surgeon
          </p>

          <p className='text-[14px] leading-5 font-medium text-textColor'>
            New Apollo Hospital, New York.
          </p>
        </li>
      </ul>
    </div>

  </div>
}

export default DoctorAbout