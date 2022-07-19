<template>
  <div class="nav">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
            <h1 class="mt-3 text-light">Miners</h1>
        </div>
      </div>
    </div>
  </div>

<div class="table p-3">
    <table class="table table-dark table-hover">
      <thead>
          <tr>
            <th scope="col" row="2">PROJECT Name</th>
            <th scope="col" >Token</th>
            <th scope="col">Fees</th>
            <th scope="col" class=" d-flex align-items-center"><div class="sort d-flex flex-column me-2">
              <button type="button" class="btn btn-sm  btn-light mb-1" @click="sortAgeadd"><i class="bi bi-caret-up-fill"></i></button>
              <button type="button" class="btn btn-sm btn-light" @click="sortAgereduce"><i class="bi bi-caret-down-fill"></i></button>
            </div>Age</th>
            <th scope="col">Daily ROI</th>
            <th scope="col">Risk Warning</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="item in miners" :key="item.id">
            <!-- //1 -->
            <th scope="row"><a :href="item.contentUrl" target="_blank">{{item.content}}</a></th>
            <td class="d-flex align-items-center"><a :href="item.coinHref" target="_blank"><img :src="item.coinImgUrl" alt="" class="icon me-2"></a>{{item.coin}}</td>
            <td class="text-success">{{item.fees}}</td>
            <td class="text-warning">{{item.age}}d</td>
            <td class="text-danger">{{item.daily}}%</td>
            <td>{{item.risk}}</td>
          </tr>
      </tbody>
    </table>
 </div>

</template>
<style lang="scss">
.nav{
  height: 100px;
  background-image: url(https://media.istockphoto.com/photos/sky-full-of-stars-picture-id512250305?b=1&k=20&m=512250305&s=170667a&w=0&h=x_Y7xuAMU6llJlKGm7dXDZsCitof4mYGH0YmUasFha8=);
}
.icon{
  width: 30px;
  height: 30px;
}
.btn-set{
  width: 15px;
  height: 20px;
  margin-bottom: 5px;
}
</style>

<script>
export default {
  data () {
    return {
      miners: [
        // {
        //   id: 1,
        //   miningGroup: 'Age of Mining',
        //   miningHref: 'https://ageofmining.com/?ref=0xc0C3C272f2b998F17Ad6085376663b39A72467EE',
        //   coin: 'BNB',
        //   coinHref: 'https://poocoin.app/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        //   coinImgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        //   fees: '5% / 5%',
        //   age: 18,
        //   daily: 6,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 2,
        //   miningGroup: 'Solar Farm v2',
        //   miningHref: 'https://app.solarfarm.finance/?ref=0x9b97F10E328F8c40470eCF8EF95547076FAa1879',
        //   coin: 'BNB',
        //   coinHref: 'https://poocoin.app/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        //   coinImgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        //   fees: '6% / 6%',
        //   age: 43,
        //   daily: 14.3,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 3,
        //   miningGroup: 'BUSD Paycheck AutoMiner',
        //   miningHref: 'https://busdpaycheck.org/?ref=0x9b97F10E328F8c40470eCF8EF95547076FAa1879',
        //   coin: 'BUSD',
        //   coinHref: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
        //   coinImgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
        //   fees: '7% / 7%',
        //   age: 52,
        //   daily: 1.8,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 4,
        //   miningGroup: 'Gold Grinder v2',
        //   miningHref: 'https://goldgrinderv2.com/?ref=0x9b97F10E328F8c40470eCF8EF95547076FAa1879',
        //   coin: 'BUSD',
        //   coinHref: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
        //   coinImgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
        //   fees: '5.5% / 5.5%',
        //   age: 43,
        //   daily: 10,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 5,
        //   miningGroup: 'BUSD 3X Miner',
        //   miningHref: 'https://libera.financial/busd-3x-miner?ref=0x24F7cF808Ba408f4a76b1a4c74F943eF5344dd45&utm_source=moonarch&utm_medium=toplist',
        //   coin: 'LIBERA/BUSD LP',
        //   coinHref: 'https://poocoin.app/tokens/0x22d954ca5540cab869ada9bd9d339cde3a9313b3',
        //   coinImgUrl: 'https://libera.financial/logo/128x128.png',
        //   fees: '0% / 0%',
        //   age: 41,
        //   daily: 3,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 6,
        //   miningGroup: 'AvaxLAND',
        //   miningHref: 'https://avaxland.net/?ref=0x42842c35329e504141e482cd0e30884fc5616aac',
        //   coin: 'AVAX',
        //   coinHref: 'https://dexscreener.com/avalanche/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
        //   coinImgUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
        //   fees: '7% / 7%',
        //   age: 0,
        //   daily: '0%',
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 7,
        //   miningGroup: 'Avarice BUSD',
        //   miningHref: 'https://avaricetoken.io/?r=0x42842C35329e504141e482cD0e30884fc5616AAc',
        //   coin: 'BUSD',
        //   coinHref: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
        //   coinImgUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png',
        //   fees: '6% /6%',
        //   age: 1,
        //   daily: 0,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 8,
        //   miningGroup: 'Avarice BNB',
        //   miningHref: 'https://avaricetoken.io/?r=0x42842C35329e504141e482cD0e30884fc5616AAc',
        //   coin: 'BNB',
        //   coinHref: 'https://poocoin.app/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        //   coinImgUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        //   fees: '6% / 6%',
        //   age: 40,
        //   daily: 0,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 9,
        //   miningGroup: 'Genesis Farm',
        //   miningHref: 'https://busd.genesisfarm.money/#0x9b97F10E328F8c40470eCF8EF95547076FAa1879',
        //   coin: 'BUSD',
        //   coinHref: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
        //   coinImgUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png',
        //   fees: '8% / 0%',
        //   age: 1,
        //   daily: '',
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 10,
        //   miningGroup: 'Baked Lasagna',
        //   miningHref: 'https://bakedlasagna.io/?ref=0x9b97F10E328F8c40470eCF8EF95547076FAa1879',
        //   coin: 'BNB',
        //   coinHref: 'https://poocoin.app/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        //   coinImgUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png',
        //   fees: '5% / 5%',
        //   age: 1,
        //   daily: 10,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 11,
        //   miningGroup: 'BUSD Hive',
        //   miningHref: 'https://busdhive.com/?ref=0x9b97f10e328f8c40470ecf8ef95547076faa1879',
        //   coin: 'BUSD',
        //   coinHref: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
        //   coinImgUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png',
        //   fees: '5% / 5%',
        //   age: 1,
        //   daily: 8,
        //   risk: 'Fork of BNB Crops Farmer.'
        // },
        // {
        //   id: 12,
        //   miningGroup: 'Dino BUSD',
        //   miningHref: 'https://dinobusd.finance/?ref=0x9b97F10E328F8c40470eCF8EF95547076FAa1879',
        //   coin: 'BUSD',
        //   coinHref: 'https://poocoin.app/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56',
        //   coinImgUrl: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png',
        //   fees: '6% / 2%',
        //   age: 20,
        //   daily: 8,
        //   risk: 'Fork of BNB Crops Farmer.'
        // }
      ]
    }
  },
  methods: {
    sortAgeadd () {
      this.miners.sort(function (a, b) {
        return a.age - b.age
      })
    },
    sortAgereduce () {
      this.miners.sort(function (a, b) {
        return b.age - a.age
      })
    }
  },
  mounted () {
     this.axios.get('https://enigmatic-stream-43395.herokuapp.com/posts')
      .then(res => {
        console.log(res)
        this.miners = res.data.post
      })
  }
}
</script>
