
const url="https://fakestoreapi.com/products?limit=15";
var txt='';
const fetchData = async ()=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        for(let item of data){
            txt += `
            <div class="box">
                <div class="box-img">
                    <img src="${item.image}" alt="">
                </div>
                <div class="box-text">
                    <h2>${item.title}</h2>
                    <h3>From ${item.price}$</h3>
                    <h6>Rate ${item.rating['rate']}</h6>
                </div>
            </div>`;
        }
        document.getElementsByClassName('container')[0].innerHTML=txt;
    } catch(err){
        console.log(err);
    }
};
fetchData();
///////////////search/////////////////////
const search = async()=>{
    const response=await fetch(url);
    const data = await response.json();
    const list = [...new Set(data.map((item)=>{
        return item;
    }))];
    console.log(list)
    document.getElementById('search').addEventListener('keyup' , (e)=>{
        const searchData = e.target.value.toLowerCase();
        const filterData = list.filter((item)=>{
            return item.title.toLowerCase().includes(searchData);
        });
        displayItem(filterData);
    });
    const displayItem=((item)=>{
        document.getElementById('root').innerHTML = item.map((item)=>{
            const{image,title,price,rating}=item;
            return (`
                    <div class="box">
                        <div class="box-img">
                            <img src="${image}" alt="">
                        </div>
                        <div class="box-text">
                            <h2>${title}</h2>
                            <h3>From ${price}$</h3>
                            <h6>Rate ${rating['rate']}</h6>
                        </div>
                    </div>
            `);
        }).join('');
    });
}
search();
////////////Menu///////////////
const menu =[
    {
        'page_menu':'Home'
    },
    {
        'page_menu':'Men'
    },
    {
        'page_menu':'Women'
    },
    {
        'page_menu':'Social Media'
    },
    {
        'page_menu':'Contact'
    },
 ];
 var  pageMenu='';
 for(let i in menu){
    pageMenu += `<li><a href="#">${menu[i]['page_menu']}</a></li>`;
 }
 document.getElementsByClassName('page-menu')[0].innerHTML=`<ul>${pageMenu}</ul>`;
//////////////logo///////////
const pageName=[
    {
        pagename : 'Fashion Store'
    }
];
for(let i in pageName){
    var pagename=pageName[i]['pagename'];
}
document.getElementById('page-name').innerHTML=pagename;

const logo=[
    {
        'id':'silver-text.jpg'
    }
];
var pageLogo ='';
for(let i in logo){
    pageLogo = `<img src="${logo[i]['id']}" alt="">`;
}
document.getElementsByClassName('logo')[0].innerHTML=pageLogo;
document.getElementsByClassName('footer-logo')[0].innerHTML=pageLogo;
/////////////address////////////
const address=[
    {
        'address':'<i class="fa-solid fa-location-dot"></i> Saang Kandal,Phnom Penh,Cambodia <br>'
    },
    {
        'address':'<i class="fa-brands fa-telegram"></i> +855 16 559 131'
    },
];
var _address='';
for(let i in address){
    _address += `<a href="#">${address[i]['address']}</a>`;
}
document.getElementsByClassName('about')[0].innerHTML=_address;

const social=[
    {
        'follow' : 'facebook_733547.png',
        'url':'https://www.facebook.com/profile.php?id=100039996099054&sk=about'
    },
    {
        'follow' : 'instagram_1409946.png',
        'url':'https://www.facebook.com/profile.php?id=100039996099054&sk=about'
    },
    {
        'follow' : 'youtube_3938037.png',
        'url':'https://www.facebook.com/profile.php?id=100039996099054&sk=about'
    },
];
var link='';
for(let i in social){
    link +=`<a href="${social[i]['url']}" target="_blank">
                <img src="${social[i]['follow']}" alt="">
            </a>`;
}
document.getElementsByClassName('label')[0].innerHTML=link;
