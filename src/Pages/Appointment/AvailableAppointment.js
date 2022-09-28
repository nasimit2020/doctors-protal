import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Service from './Service';
import ServiceModal from './ServiceModal';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP')

    const {data: services, isLoading, refetch} = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className="text-center text-xl text-secondary">Available Appointment on {format(date, 'PP')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <ServiceModal
                date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                key={treatment._id}
                refetch={refetch}
            ></ServiceModal>}
        </div>
    );
};

export default AvailableAppointment;