import Manuals from "./images/Manuals.png"
import Engineering from "./images/Engineering.png"
import Builders from "./images/Builders.png"
import Plans from "./images/Plans.png"

const Services = [
    {
        title: 'O&M Manuals',
        image: <img src={Manuals} alt='Manuals' />,
        details: 'Dewick & Associates originated from providing Operating and Maintenance manuals to the Mechanical Services industry.',
        btn: 'MORE DETAILS'
    },
    {
        title: 'Mechanical Engineering',
        image: <img src={Engineering} alt='Engineering' />,
        details: 'With our unique mix of degree qualified engineers and our practical contractor experience, outsourcing engineering is the obvious choice.',
        btn: 'MORE DETAILS'
    },
    {
        title: 'Builders Manuals',
        image: <img src={Builders} alt='Builders' />,
        details: 'Builders Manuals provide the full suite of handover documents in the same high quality format as our O&M Manuals.',
        btn: 'MORE DETAILS'
    },
    {
        title: 'Commissioning Plans',
        image: <img src={Plans} alt='Plans' />,
        details: 'Professional, detailed and concise commissioning plans to guide your technicians through the commissioning process, while giving you piece of mind that everything will be commissioned appropriately.',
        btn: 'MORE DETAILS'
    }
]

export default Services