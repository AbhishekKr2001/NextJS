import { connectDB } from "@/config/db";
import Doctor from "@/models/doctor";


export const dynamic = "force-dynamic";
//  to make this page dynamic by default pages are static 
// if some things are not used in those pages like 
// Dynamic page
// cookies()
// headers()
// draftMode()
// fetch(..., { cache: "no-store" })
// revalidate = 0
// dynamic = "force-dynamic"

// Static / ISR page
// revalidate = 30
// generateStaticParams()



const DoctorsPage = async () => {
    await connectDB();

    const doctors = await Doctor.find().lean();

    return (
        <div>
            <h1>Doctor List</h1>

            <p>Total Doctors: {doctors.length}</p>

            <ul>
                {doctors.map((doctor) => (
                    <li key={doctor._id.toString()}>
                        Dr. {doctor.first_name} {doctor.last_name} -{" "}
                        {doctor.specialization}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorsPage;