<template>
    <v-container>
        <form @submit.prevent="onSubmit">
            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    중개사 주소
                <v-list-item class="mx-1">
                    <v-text-field placeholder="" v-model="agentAddress" required></v-text-field>
                    <button @click="onApiAgentAddress">입력</button>
                </v-list-item>
            </div> 

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    중개사 이메일
                <v-list-item class="mx-1">
                    <v-text-field placeholder="" v-model="agentEmail" required></v-text-field>
                </v-list-item>
            </div> 
            
            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    중개사 이름
                <v-list-item class="mx-1">
                    <v-text-field placeholder="" v-model="agentName" required></v-text-field>
                </v-list-item>
            </div>  

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    중개사 연락처
                <v-list-item class="mx-1">
                    <v-text-field placeholder="" v-model="agentPhone" required></v-text-field>
                </v-list-item>
            </div> 

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    중개인 이름
                <v-list-item class="mx-1">
                    <v-text-field placeholder="" v-model="userName" required></v-text-field>
                </v-list-item>
            </div> 

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                    중개인 연락처
                <div class="mx-1">
                    <v-text-field placeholder="상세설명" v-model="agentMobile" required></v-text-field>
                </div> 
            </div>

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    매물의 주소를 입력하세요
                <v-list-item class="mx-1">
                    <v-text-field placeholder="" v-model="address" required></v-text-field>
                    <button @click="onApiAddress">확인</button>
                </v-list-item>
            </div>

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    주소(시)
                <v-list-item class="mx-1">
                    <v-text-field placeholder="주소 입력시 자동으로 입력됩니다" v-model="local1" required readonly></v-text-field>
                </v-list-item>
            </div>

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    주소(구)
                <v-list-item class="mx-1">
                    <v-text-field placeholder="주소 입력시 자동으로 입력됩니다" v-model="local2" required readonly></v-text-field>
                </v-list-item>
            </div>

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    주소(동)
                <v-list-item class="mx-1">
                    <v-text-field placeholder="주소 입력시 자동으로 입력됩니다" v-model="local3" required readonly></v-text-field>
                </v-list-item>
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">home</v-icon>
                    건물사진 등록
                <div class="mx-1">
                    <input type="file" id="files" ref="files" height="100%" width="100%" multiple v-on:change="handleFileUpload()">
                    <!--<input type="file" ref="serveyImage" height="100%" width="100%" @change="handleFileUpload()">-->
                </div>
            </div>  

            <div class="mx-3">
                <v-icon color="black" size="30px">label</v-icon>
                    보증금
                <v-list-item class="mx-1">
                    <v-text-field input type="number" placeholder="" v-model="deposit" required></v-text-field>
                </v-list-item>
            </div> 

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                방구조
                <div class="mx-1">
                    <v-text-field placeholder="방구조"  v-model="roomType" required></v-text-field>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                판매유형
                <div class="mx-1">
                    <v-select :items='salesTypes' placeholder="" v-model="salesType" required></v-select>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                서비스 유형
                <div class="mx-1">
                    <v-select :items='serviceTypes' placeholder="" v-model="serviceType" required></v-select>
                </div> 
            </div> 

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                관리비
                <div class="mx-1">
                    <v-text-field placeholder="관리비" v-model="manageCost" required></v-text-field>
                     관리비 포함 항목
                <div class="mx-1">
                    <v-select :items='managements' placeholder="관리비 포함 항목" v-model="manageCostInc" required></v-select>
                </div> 
                </div> 
            </div> 

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                크기 
                <div class="mx-1">
                    <v-text-field placeholder="방의 평수를 입력해주세요." v-model="size" required></v-text-field>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                층수
                <div class="mx-1">
                    <v-select :items='floorCheck' input type="number" placeholder="건물 총 층수" v-model="floorAll" required></v-select>
                </div>
                <div class="mx-1">
                    <v-select :items='floorCheck' input type="number" placeholder="해당 층" v-model="floor" required></v-select>
                </div>  
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                방향
                <div class="mx-1">
                    <v-select :items='roomDirections' placeholder="" v-model="roomDirection" required></v-select>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                옵션
                <div class="mx-1">
                    <v-select :items='option' placeholder="옵션" v-model="options" required></v-select>
                </div> 
            </div>
           
            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                반려동물
                <div class="mx-1">
                    <v-select :items='petcheck' placeholder="반려동물" v-model="pets" required></v-select>
                </div> 
            </div> 

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                주차
                <div class="mx-1">
                    <v-select :items='parkings' placeholder="주차" v-model="parking" required></v-select>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                인근 지하철
                <div class="mx-1">
                    <v-text-field placeholder="인근 지하철" v-model="nearSubways" required></v-text-field>
                </div> 
            </div>
            
            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                엘리베이터
                <div class="mx-1">
                    <v-select :items='exist' placeholder="엘리베이터" v-model="elevator" required></v-select>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                입주가능일
                <div class="mx-1">
                    <v-text-field  placeholder="입주가능일" v-model="moveinDate" required></v-text-field>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                소개글
                <div class="mx-1">
                    <v-text-field placeholder="매물에 관한 내용을 100자 이내로 적어주세요" v-model="title" required></v-text-field>
                </div> 
            </div>

            <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                매물 상세설명
                <div class="mx-1">
                    <v-text-field placeholder="매물에 관한 내용을 상세히 적어주세요" v-model="description" required></v-text-field>
                </div> 
            </div>

            <!-- 자동으로 입력되는 부분 -->
            <div class="mx-3" hidden> 
                <v-icon color="black" size="30px">label</v-icon>
                중개사무소 좌표
                <div class="mx-1">
                    <v-text-field placeholder="" v-model="agentLat" required readonly></v-text-field>
                </div> 
            </div>
            <div class="mx-3" hidden> 
                <v-icon color="black" size="30px">label</v-icon>
                중개사무소 좌표
                <div class="mx-1">
                    <v-text-field placeholder="" v-model="agentLng" required readonly></v-text-field>
                </div> 
            </div>
            <div class="mx-3" hidden> 
                <v-icon color="black" size="30px">label</v-icon>
                좌표(lat)
                <div class="mx-1">
                    <v-text-field placeholder="좌표(lat)" v-model="lat" required readonly></v-text-field>
                </div> 
            </div>
            <div class="mx-3" hidden> 
                <v-icon color="black" size="30px">label</v-icon>
                좌표(lng)
                <div class="mx-1">
                    <v-text-field placeholder="좌표(lng)" v-model="lng" required readonly></v-text-field>
                </div> 
            </div>
            <div class="mx-3" hidden> 
                <v-icon color="black" size="30px">label</v-icon>
                작성자
                <div class="mx-1">
                    <v-text-field placeholder="" v-model="agentId" required readonly></v-text-field>
                </div> 
            </div>
            <!--
             <div class="mx-3"> 
                <v-icon color="black" size="30px">label</v-icon>
                옵션
                <div class="mx-1">
                    <v-select :items='option' placeholder="옵션의 여부를 입력해주세요." v-model="manage_cost_inc" required>
                        <template >
                            <v-list-item  @click="toggle">
                                <v-list-item-action>
                                    <v-icon :color="manage_cost_inc.length > 0 ? 'indigo darken-4' : ''">
                                        {{ icon }}
                                    </v-icon>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>
                                    모두 선택
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </template>  
                    </v-select>
                </div> 
            </div>
             -->

            <div class="mt-3">
                <v-btn color="white" tile large button type="submit" v-on:click="submitFiles()">방 등록하기</v-btn>
            </div>
        </form>
    </v-container>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    name: 'VillaRegisterForm',
    data () {
      return {
            image: '',
            deposit: '',
            roomType: '빌라',
            manageCost: '',
            manageCostInc: '',
            sizeM2: '',
            size: '',
            floorAll: '',
            floor: '',
            roomDirection: '',
            options: '',
            pets: '',
            parking: '',
            elevator: '',
            moveinDate: '',
            title: '',
            description: '',
            nearSubways: '',
            address: '',
            salesType: '',
            agentAddress: '',
            agentEmail: '',
            agentLat: '',
            agentLng: '',
            agentMobile: '',
            agentName: '',
            agentPhone: '',
            buildingType: '',
            lat: '',
            lng: '',
            local1: '',
            local2: '',
            local3: '',
            serviceType: '',
            userIntro: '',
            userName: '',
            url: '',
            updatedAt: '',
            agentId: '',
            floorCheck:['1층', '2층', '3층', '4층', '5층', '6층','7층', '8층', '9층', '10층', '11층','12층','13층','14층','15층','16층','17층','18층','19층','20층',
                        '21층','22층','23층','24층','25층','26층','27층','28층','29층','30층','31층','32층','33층','34층','35층','36층','37층','38층','39층','40층',
                        '50층','51층','52층','53층','54층','55층','56층','57층','58층','59층','60층'],
            serviceTypes: ['오픈형 원룸(방1)','분리형 원룸(방1 거실1)','복층형 원룸', '투룸(방2, 거실1)', '쓰리룸+'],
            salesTypes: ['월세','전세','매매'],
            managements: ['전기세', '가스', '수도', '인터넷', 'TV'],
            exist: ['있음', '없음'],
            parkings: ['가능', '없음'],
            roomDirections: ['북향', '남향', '동향', '서향', '남동향', '남서향', '북동향', '북서향', '확인필요'],
            petcheck: ['가능', '불가능', '고양이만', '확인필요'],
            roomTypes: [ '오픈형 원룸(방1)', '분리형 원룸(방1 거실1)', '복층형 원룸', '투룸(방2 거실1)', '쓰리룸+'],
            option: ['에어컨', '냉장고', '세탁기', '가스레인지', '전자레인지', '옷장', '신발장', '싱크대', '인터넷', '인덕션', '책상', '침대'],
        }
    },
    computed: {
        ...mapState(['userInfo']),
    },
    mounted() {
        this.agentId = this.userInfo.userId
        if (this.$store.state.session != null) {
            this.isLogin = true
        }
    },
    methods: {
        onSubmit () {
            const { image, deposit, roomType, manageCost, manageCostInc, sizeM2, size, floorAll, floor, roomDirection, options, pets, parking, elevator, moveinDate, title, 
            description, nearSubways, address, salesType, agentAddress, agentEmail, agentLat, agentLng, agentMobile, agentName, agentPhone, buildingType,
            lat, lng, local1, local2, local3, serviceType, userIntro, userName, url, updatedAt, agentId} = this

            this.$emit('submit', { image, deposit, roomType, manageCost, manageCostInc, sizeM2, size, floorAll, floor, roomDirection, options, pets, parking, elevator, moveinDate, title, 
            description, nearSubways, address, salesType, agentAddress, agentEmail, agentLat, agentLng, agentMobile, agentName, agentPhone, buildingType,
            lat, lng, local1, local2, local3, serviceType, userIntro, userName, url, updatedAt, agentId})
        },
        /*
        handleFileUpload () {
            this.files = this.$refs.files.files
            const info = this.files
            this.image = info[0].name
        },
        submitFiles () {
            let formData = new FormData()
            for (var idx = 0; idx < this.files.length; idx++) {
                formData.append('villaList', this.files[idx])
            }
            axios.post('http://localhost:7777/file/uploadVillaImg', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then (res => {
                this.response = res.data
            })
            .catch (res => {
                this.response = res.message
            }) 
        },
        */
        handleFileUpload () {
            this.files = this.$refs.files.files
            const info = this.files
            this.image = info[0].name
        },
        submitFiles () {
            let payload = this.image()
            payload.append('image', File)

            axios.post('https://api.imgbb.com/1/upload?expiration=600&key=ca442ada99076d1fda16e811a57f9d6d', payload)
                .then(response => {
                    alert("이미지 입력도 성공")
                    console.log(response)
                    console.log('이미지 url',response.data.data.image.url)
                    console.log('success')
            })
            .catch((error) => {
                console.log('error', error)
                alert('try agian')
            })
       },

        toggle () {
            this.$nextTick(() => {
            if (this.likesAllOption) {
                this.manage_cost_inc = []
            } else {
                this.manage_cost_inc = this.option.slice()
            }
            })
        },
        onApiAddress () {
            axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${this.address}`,
            { headers: { 'Authorization': 'KakaoAK ' + '005dda6eedb914e554e8810f970149d9' }}).then(res => {
                alert("입력성공")
                console.log(res.data)
            this.agentId = this.userInfo.userId 
            this.lat = res.data.documents[0].y
            this.lng = res.data.documents[0].x
            this.local1 = res.data.documents[0].road_address.region_1depth_name
            this.local2 = res.data.documents[0].road_address.region_2depth_name
            this.local3 = res.data.documents[0].road_address.region_3depth_name
            })
        },
        onApiAgentAddress () {
            axios.get(`https://dapi.kakao.com/v2/local/search/address.json?query=${this.agentAddress}`,
            { headers: { 'Authorization': 'KakaoAK ' + '005dda6eedb914e554e8810f970149d9' }}).then(res => {
                alert("입력성공")
                console.log(res.data)
                this.agentLat = res.data.documents[0].y
                this.agentLng = res.data.documents[0].x
            })
        },
    },
}
</script>