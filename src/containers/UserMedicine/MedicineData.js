import React from 'react';
import BackBtn from '../../components/UI/BackBtn/BackBtn';
import { H1, Heading1, Heading3 } from '../../components/UI/Heading/Heading.style';
import { InnerText2 } from '../../components/UI/Text/text.style';
import { useParams } from 'react-router-dom';
import { Heading4, Heading5 } from '../../components/UI/Card/CardBox.style';

function MedicineData(props) {
    const { id } = useParams()

    const medicines = [
        {
            "id": 1,
            "name": "Naproxen",
            "price": 85,
            "expiry": 2023,
            "desc": "Naproxen, sold under the brand name Aleve among others, is a nonsteroidal anti-inflammatory drug used to treat pain, menstrual cramps, inflammatory diseases such as rheumatoid arthritis, gout and fever."
        },
        {
            "id": 2,
            "name": "Jakafi",
            "price": 85,
            "expiry": 2023,
            "desc": "Ruxolitinib, sold under the brand name Jakafi among others, is a medication used for the treatment of intermediate or high-risk myelofibrosis, a type of myeloproliferative neoplasm that affects the bone."
        },
        {
            "id": 3,
            "name": "Hydrea",
            "price": 85,
            "expiry": 2023,
            "desc": "Hydrea (hydroxyurea) is an antineoplastic (anti-cancer) agent used to treat melanoma, resistant chronic myelocytic leukemia, and recurrent, metastatic, or inoperable carcinoma of the ovary and primary squamous cell (epidermoid) carcinomas of the head and neck."
        },
        {
            "id": 4,
            "name": "Hiprex",
            "price": 85,
            "expiry": 2023,
            "desc": "Hexamethylenetetramine, also known as methenamine, hexamine, or urotropin, is a heterocyclic organic compound with the formula (CH₂)₆N₄. This white crystalline compound is highly soluble in water and polar organic solvents. It has a cage-like structure similar to adamantane"
        },
        {
            "id": 5,
            "name": "Meftal",
            "price": 85,
            "expiry": 2023,
            "desc": "Meftal Spas tablet is an antispasmodic medicine. It contains a combination of dicyclomine and mefenamic acid. This medicine is used for relieving pain and spasm in the abdomen and during or before menses (periods)."
        },
        {
            "id": 6,
            "name": "Wegovy",
            "price": 85,
            "expiry": 2023,
            "desc": "WEGOVY® (semaglutide) injection 2.4 mg is an injectable prescription medicine that may help adults and children aged ≥12 years with obesity (BMI ≥30 for adults, BMI ≥ 95th percentile for age and sex for children), or some adults with excess weight (BMI ≥27) (overweight) who also have weight-related medical problems to help them lose weight and keep it off. Wegovy® should be used with a reduced calorie meal plan and increased physical activity"
        },
        {
            "id": 7,
            "name": "Aripiprazole",
            "price": 85,
            "expiry": 2023,
            "desc": "Aripiprazole is used to treat certain mental/mood disorders (such as bipolar disorder, schizophrenia, Tourette's syndrome, and irritability associated with autistic disorder). It may also be used in combination with other medication to treat depression. Aripiprazole is known as an antipsychotic drug (atypical type)."
        },
        {
            "id": 8,
            "name": "Orlistat",
            "price": 85,
            "expiry": 2023,
            "desc": "Orlistat, sold under the brand name Xenical among others, is a medication used to treat obesity. Its primary function is preventing the absorption of fats from the human diet by acting as a lipase inhibitor, thereby reducing caloric intake."
        }
    ]
    return (
        <div>
            <div className='container'>
                <div className='revicard'><BackBtn /></div>
                {medicines.map((v) => {
                    if (parseInt(id) === v.id) {
                        return (
                            <div className='revicard'>
                                <H1>Medicine: {v.name}</H1>
                                <Heading4>Price: {v.price + ' ₹'} </Heading4>
                                <Heading4 className='block'>Expiry: {v.expiry} </Heading4>
                                <InnerText2>{v.desc}</InnerText2>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    );
}

export default MedicineData;