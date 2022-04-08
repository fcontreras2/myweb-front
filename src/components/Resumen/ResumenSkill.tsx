import { ResumenSkill } from "interfaces/resumen";

const ResumenSkill = (props: ResumenSkill) => {
  console.log(props)
  return (
    <>
      { props.resumen_skills_list?.map((item) => (
          <div className="flex pt-4 px-0 space-x-8 w-full mb-0">
            <h4 className="font-semibold w-1/4">{item.title}</h4>
            <div className="flex w-3/4 flex-wrap items-center">
            {item.tags.data.map((tag, index) => (
                  <span
                    key={index}
                    className="text-gray-500 text-xs mr-2 my-1"
                  >
                    {tag.attributes.title}
                  </span>
                ))}
              
            </div>
          </div>
        ))}
    </>
  );
};

export default ResumenSkill;
