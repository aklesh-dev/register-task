type addressData = {
    country: string;
    district: string;
    muncipiality: string;
    city: string;
    ward: string
};

type addresssProps = addressData & {

    updateFields: (fields: Partial<addressData>) => void;
};
export default function Address({country, district, muncipiality, city, ward, updateFields}: addresssProps) {
  return (
    <section className="bg-slate-300 p-3 my-5">
            <h2 className='font-bold text-2xl'>Address Details</h2>

            <div className="flex flex-wrap gap-5 border-2 mx-auto">
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Country</label>
                    <input className='p-3 rounded-lg' type="text" value={country} onChange={e => updateFields({country: e.target.value})} placeholder="Enter your country" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>District</label>
                    <input className='p-3 rounded-lg' value={district} onChange={e => updateFields({district: e.target.value})} type="text" id="middleName" placeholder="Enter your middle name" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Muncipilaty</label>
                    <input className='p-3 rounded-lg'value={muncipiality} onChange={e => updateFields({muncipiality: e.target.value})} type="text" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>City</label>
                    <input className='p-3 rounded-lg' value={city} onChange={e => updateFields({city: e.target.value})} type="text" id="city" placeholder="Enter your last name" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Ward</label>
                    <input className='p-3 rounded-lg' value={ward} onChange={e => updateFields({ward: e.target.value})} type="number" id="ward" placeholder="Enter your last name" />
                </div>               

            </div>

        </section>
  )
}
