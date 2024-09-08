import DateSelector from './inputElements/DateSelector';

type personalData = {
    firstName: string;
    middleName: string;
    lastName: string;
    phone: string;
    birthDate: string
};

type personalDetailsProps = personalData & {

    updateFields: (fields: Partial<personalData>) => void;
};

export default function PersonalDetails({ firstName, middleName, lastName, phone, birthDate, updateFields }: personalDetailsProps) {


    return (
        <section className="bg-slate-300 p-3 my-5">
            <h2 className='font-bold text-2xl'>Personal Details</h2>

            <div className="flex flex-wrap gap-5 border-2 mx-auto">

                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>First Name</label>
                    <input onChange={e => updateFields({firstName: e.target.value})} className='p-3 rounded-lg' value={firstName} type="text" id={"firstName"} placeholder="Enter your name" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Middle Name</label>
                    <input onChange={e => updateFields({middleName: e.target.value})} className='p-3 rounded-lg' value={middleName} type="text" id="middleName" placeholder="Enter your middle name" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Last Name</label>
                    <input onChange={e => updateFields({lastName: e.target.value})} className='p-3 rounded-lg' value={lastName} type="text" id="lastName" placeholder="Enter your last name" />
                </div>
                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Phone</label>
                    <input onChange={e => updateFields({phone: e.target.value})} className='p-3 rounded-lg' type="phone" value={phone} id="phone" placeholder="98********" />
                </div>

                <div className='flex flex-col gap-2 max-sm:w-full'>
                    <label htmlFor="" className='text-2xl'>Date</label>
                    {/* <input onChange={e => updateFields({birthDate: e.target.value})} type='date' value={birthDate} className='p-3 rounded-lg' /> */}
                    <DateSelector date='date' onChange={(date) => updateFields({birthDate: date || ''})} value={birthDate} />
                </div>

            </div>

        </section>
    )
};
