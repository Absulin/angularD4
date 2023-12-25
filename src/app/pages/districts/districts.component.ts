import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-districts',
  standalone: true,
  imports: [SlicePipe,RouterLink],
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css'
})
export class DistrictsComponent {
  districts: any = [
    {
      id:1,
      title: "Trivandram" ,
      image:"data:image/jpeg;base64,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",
      description:"Trivandrum, also known as Thiruvananthapuram, is the capital city of Kerala, India. The city is famous for its ancient temples, museums, and art galleries, as well as its beautiful beaches and backwaters. Trivandrum is also a hub for Ayurvedic treatments and wellness centres."
    },
    {
      id:2,
      title: "Pathanamthitta" ,
    image: "data:image/jpeg;base64,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",
    description:"Situated near the Western Ghats and bordered by the hills, Pathanamthitta district is a treat to eyes with its vast unending stretches of forests, rivers and rural landscapes. Blessed by nature, the district is famous for its scenic beauty, fairs and festivals."
  },
    {
      id:3,
      title: "Kottayam" ,
      image: "data:image/jpeg;base64,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",
      description:"Handicrafts is well-known among visitors. Kottayam is famous for its black ceramics. Wonderful hand-created objects may be found in E.M.A. Handicrafts, such as carved wooden sculptures, hand-blocked printed material with a tribal feel, and dried floral products."
    },
  {
    id:4,
    title:"Alappuzha",
    image:"https://media-cdn.tripadvisor.com/media/photo-c/1280x250/09/f4/b0/b7/alappuzha-beach.jpg",
    description:"Alappuzha well-known as the 'Venice of the East' because of network of canals and waterways, Alappuzha is a district of immense natural beauty. It is embraced by the Arabian Sea in the west and has a network of lakes, lagoons and freshwater rivers criss-crossing it."

  },

  {
    id:5,
    title:"Kollam",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/be/73/88/img-20170911-wa0033-largejpg.jpg?w=500&h=-1&s=1",
    description:"Kollam is the fourth largest city in Kerala and is known for cashew processing and coir manufacturing. It is the southern gateway to the Backwaters of Kerala and is a prominent tourist destination. Kollam is one of the most historic cities with continuous settlements in India."
    

  },
  
  {
    id:6,
    title:"Ernakulam",
    image:"https://im.hunt.in/cg/City-Guide/about-erna.jpg",
    description:"The eastern part of Ernakulam is primarily agrarian in nature. Rice is the principal crop cultivated in the wetlands. The district is the largest producer of nutmeg and pineapple in the state: more than 55% of pineapples produced in the state is cultivated in the district."

  },
  
  {
    id:7,
    title:"Idukki",
    image:"https://www.trawell.in/admin/images/upload/142678480IdukkiDam_Main_New.jpg",
  description:"The rugged hill resort in Idukki is known for its wildlife sanctuaries, beautiful bungalows, tea factories, rubber plantations and forests. Idukki's speciality lies in 650 feet long and 550 feet high arch dam across the Kuravan Kurathi mountain, which is the largest in the country."
  },
  {
    id:8,
    title:"Thrissur",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/93/76/fe/side-view-of-the-water.jpg?w=700&h=500&s=1",
    description:"Thrissur district was formed on 1 July 1949, with the headquarters at Thrissur City. Thrissur is known as the cultural capital of Kerala, and the land of Poorams. The district is known for its ancient temples, churches, and mosques. Thrissur Pooram is the most colourful temple festival in Kerala."

  },
  
  {
    id:9,
    title:"Palakkad",
    image:"https://upload.wikimedia.org/wikipedia/commons/b/b0/Palakkad_Fort_5.jpg",
    description:"This beautiful district in Kerala is very famous for the Palakkad Fort, the Jain temple, the annual Ratholsavam and of course for the extremely beautiful green and lush Malampuzha gardens and dams."

  },
  
  {
    id:10,
    title:"Malappuram",
    image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-malappuram3.png",
    description:"Malappuram has made numerous contributions to the cultural heritage of Kerala. A famous centre for Hindu-Vedic learning and Islamic philosophy, the temples and mosques of this region are well known for their spectacular festivals."

  },
  
  {
    id:11,
    title:"Kozhikodu",
    image:"https://t4.ftcdn.net/jpg/05/40/51/61/360_F_540516197_1ZMI0kSViCwwvlTandP3fTVmfPAiWR7m.jpg",
    description:"Formerly known as Calicut, Kozhikode is located in Kerala. It was the Capital of Malabar during the Zamorin rule 500 years ago and is famous for its centuries-old trade in cotton and spices with Jews, Arabs, Phoenicians and Chinese."

  },
  
  {
    id:12,
    title:"Wayanadu",
    image:"https://www.mountainshadows.in/wp-content/uploads/2023/04/Areal-view-of-Mountain-Shadows-a-resort-in-Wayanad-with-swimming-pool-1024x682.png",
    description:"Heaven for wildlife lovers, the Wayanad Wildlife Sanctuary should be on the top of your list when you're exploring the famous sightseeing places in Wayanad. Also referred to as Muthanga Wildlife Sanctuary, the Wayanad Wildlife Sanctuary is an esteemed natural habitat that provides a home to a wide variety of fauna."

  },
  
  {
    id:13,
    title:"Kannur",
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/23/81/81/kannur-kairali.jpg?w=500&h=300&s=1",
    description:"Due to its abundant natural beauty, and many tourist sites in the city, it is frequently referred to as Kerala's and is bordered by Kozhikode in the south, Kasargod in the north, and the Lakshadweep Sea in the west. There are plenty of stunning tourist sites in the city which makes it a popular tourist spot."

  },
  
  {
    id:14,
    title:"Kasarkodu",
    image:"https://t3.ftcdn.net/jpg/04/54/35/74/360_F_454357424_UaTYM299jOIYGaPrv3ZFCZfcvPlq9ChT.jpg",
    description:"The district has famous tourist centres, including the international fame BEKAL FORT & BEACH. There are also places which can be converted to attract the tourists. Kasaragod is known as the Land of Gods, Forts, Rivers, Beautiful hills and lengthy sandy beaches."
    

  }
  

   ];
  
}
