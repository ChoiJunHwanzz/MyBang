<template>
    <div>
        <!-- 검색하는 부분 -->
        <div>
            <v-layout class="search-btn">
                <v-dialog v-model="searchDialog" persistent max-width="420px">
                    <template v-slot:activator="{ on }">
                        <v-btn icon x-large v-on="on"><v-icon>search</v-icon></v-btn>        
                    </template>
                    <v-card>
                    <v-toolbar color="white darken-3" flat height="50">
                        <v-btn icon x-large @click="cancle()" style="positoin:absolute; left:23em;">
                            <v-icon>clear</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text >
                        <v-select
                            v-model="selectAddress"
                            :items="address"
                            label="모든 지역"
                            multiple
                            attach
                            chips
                            style="width: 400px; display: inline-block; margin-right: 40px;"
                            persistent-hint>
                        </v-select>
                        <v-select
                            v-model="selectRoomType"
                            :items="RoomType"
                            label="모든 건물"
                            multiple 
                            attach
                            chips
                            style="width: 400px;display: inline-block; margin-right: 40px;"
                            persistent-hint>
                        </v-select>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue lighten-1 white--text" @click="selectSearch()">
                            검색
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-layout>
        </div>

        <!-- 게시판 리스트 나오는 부분 -->
        <v-container style="width:100%;">
            <v-row>
                <v-card v-for="villa in paginatedData" :key="villa.villaNo" class="list-card"> 
                    <figure class="snip1477">
                        <router-link  :to="{ name: 'VillaReadPage', 
                            params: { villaNo: villa.villaNo.toString() } }">
                            <v-img><img height="500px" :src="require()" aspect-ratio="1"></v-img>
                        </router-link>
                        <div class="title">
                            <div>
                            <h4 @click="toDetailPage(villa.villaNo)">상세보기</h4>
                            </div>
                        </div>
                        <figcaption>
                            <h1>{{ villa.title }}<br/><br/></h1>
                            <h1>위치 : {{villa.address}}<br/></h1>
                        </figcaption>
                    </figure>
                </v-card>
            </v-row>
        </v-container>

        <!-- 페이지네이션 -->
        <v-container>
            <div class="btn-cover">
                <v-btn :disabled="pageNum === 0" @click="prevPage" icon text>
                    <v-icon>chevron_left</v-icon>
                </v-btn>
                <span class="page-count">{{ pageNum + 1 }} / {{ pageCount }} 페이지</span>
                <v-btn  :disabled="pageNum >= pageCount - 1" @click="nextPage" icon text>
                    <v-icon>chevron_right</v-icon>
                </v-btn >
            </div>
        </v-container>
    </div>
</template>

<script>

//import axios from 'axios'
//import { FETCH_PRODUCT_LIST } from '@/store/mutation-types'
//import { mapActions, mapState } from 'vuex';

export default {
    name: 'VillaListForm',
    data () {
        return {
            pageNum: 0,
            searchDialog: false,
            address: [ '서울', '경기', '인천', '강원', '충북', '충남', '충북', '전북', '전남', '경북', '경남', '부산', '대구', '제주' ],
            selectAddress: [],
            selectRoomType: [],
            RoomType: [ '아파트', '빌라', '원룸', '투룸', '셰어하우스' ],
        }
    },
    props: {
        villas: {
            type: Array,
            required: true
        },
        pageSize: {
            type: Number,
            required: false,
            default: 8
        }
    },
    computed: {
    //...mapState(['session', 'likedVillaList']),

        pageCount () {
            let listLeng = this.villas.length,
                listSize = this.pageSize,
                page = Math.floor(listLeng / listSize);
            if (listLeng % listSize > 0) page += 1;

            return page;
        },
        paginatedData () {
            const start = this.pageNum * this.pageSize,
                end = start + this.pageSize;
            return this.villas.slice(start, end);
        }
    },
    mounted() {
        /*   로그인한 상태에서 기능을 이용할 수 있게 코드를 작성 해야함 (찜 기능 같은거)
        if(this.$cookies.get("user").id) { 
        this.$store.state.session = this.$cookies.get("user")
        this.fetchLikedVillaList(this.$cookies.get("user").memberNo)
        }
        */
    },
    methods: {
            //...mapActions(['fetchLikedVillaList']),
        nextPage () {
        this.pageNum += 1;
        },
        prevPage () {
        this.pageNum -= 1;
        },
        cancle() {
        this.searchDialog = false
        },
        toDetailPage(villaNo) {
        this.$router.push({
            name: 'VillaReadPage',
            params: { "villaNo": villaNo }
        })
        },
    }
}
</script>

<style lang="scss">
.search-btn{
  position: absolute;
  top:11em;
  right: 10em;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table th {
  font-size: 1.2rem;
}
table tr {
  height: 2rem;
  text-align: center;
  border-bottom: 1px solid #505050;
}
table tr:first-of-type {
  border-top: 2px solid #404040;
}
table tr td {
  padding: 1rem 0;
  font-size: 1.1rem;
}
.btn-cover {
  margin-top: 2rem;
  margin-bottom: 5rem;
  text-align: center;
}
.btn-cover .page-btn {
  width: 5rem;
  height: 2rem;
  letter-spacing: 0.5px;
}
.btn-cover .page-count {
  padding: 0 1rem;
}
.list-card{
  width: 336px;
  float: left;
  margin: 0% 3% 2% 3%;
  align-items: center;
}
@import url(https://fonts.googleapis.com/css?family=Raleway:400,500,700);
@import url(https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css);
figure.snip1477 {
    height: 500px;
    width: 100%;
    font-family: 'Raleway', Arial, sans-serif;
    position: relative;
    overflow: hidden;
    margin: 10px;
    margin-bottom: 10px;
    min-width: 230px;
    max-width: 315px;
    color: #ffffff;
    text-align: center;
    font-size: 16px;
    background-color: #000000;
}
figure.snip1477 *,
figure.snip1477 *:before,
figure.snip1477 *:after {
-webkit-box-sizing: border-box;
  box-sizing: border-box;
-webkit-transition: all 0.55s ease;
  transition: all 0.55s ease;
}
figure.snip1477 img {
  max-width: 100%;
  backface-visibility: hidden;
  vertical-align: top;
  opacity: 0.9;
}
figure.snip1477 .title div:after {
  bottom: 10px;
  left: 0;
-webkit-transform: translateY(-100%);
  transform: translateY(-100%);
}
figure.snip1477 .title {
  position: absolute;
  top: 93%;
  left: 106px;
  padding: 5px 10px 10px;
}
figure.snip1477 h2 {
  font-weight: 400;
}

@font-face {
  font-family: 'SangSangRock';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/SangSangRockOTF.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
figure.snip1477 h4 {
  font-family: 'SangSangRock';
  font-size: 20px;
  display: block;
  font-weight: 500;
  // background-color: rgba(0, 0, 0, 0.3);
  padding: 1px 1px;
  color: #fff;
}
figure.snip1477 figcaption {
  position: absolute;
  bottom: 42%;
  left: 25px;
  text-align: left;
  opacity: 0;
  padding: 5px 60px 5px 10px;
  font-size: 0.8em;
  font-weight: 500;
  letter-spacing: 1.5px;
}
figure.snip1477 figcaption p {
  margin: 0;
}
figure.snip1477 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
figure.snip1477:hover img,
figure.snip1477.hover img {
  zoom: 1;
  filter: alpha(opacity=35);
-webkit-opacity: 0.35;
  opacity: 0.35;
}

figure.snip1477:hover figcaption,
figure.snip1477.hover figcaption {
    opacity: 1;
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s;
}
</style>