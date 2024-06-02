<template>
  <div class="total">
    <div class="head">
      <text class="xx">数据显示</text>
    </div>
    <div class="container">


      <!-- Nowcoder -->
      <div class="box">
        <img v-if="showNowCoderImage" :src="nowcoder.avatarUrl" height="90px" width="90px" alt="" />

        <div class="title">Nowcoder</div>
        <div class="input">
          <input type="text" v-model="NowCodertempValue" @keyup.enter="showNowCoderContent" />
          <button @click="showNowCoderContent">确认</button>
        </div>
        <div class="attribute">
          <div class="left">
            <span class="text">Rating: <strong style="color: black;">{{ nowcoder.rating }}</strong> </span>
            <span class="text">RatingRank: <strong style="color: black;">{{ nowcoder.ratingRank }}</strong> </span>
          </div>
          <div class="right">
            <span class="text">CompetitionCount: <strong style="color: black;">{{ nowcoder.competitionCount
                }}</strong></span>
            <span class="text">HasPassedProblem: <strong style="color: black;">{{ nowcoder.hasPassedProblem }}</strong>
            </span>
          </div>
        </div>
      </div>


      <!-- Leetcode -->
      <div class="box">
        <img v-if="showLeetCodeImage" :src="leetcode.avatarUrl" height="90px" width="90px" alt="" />
        <div class="title">Leetcode</div>
        <div class="input">
          <input type="text" v-model="LeetCodetempValue" @keyup.enter="showLeetCoderContent" />
          <button @click="showLeetCoderContent">确认</button>
        </div>
        <div class="attribute">
          <div class="left">
            <span class="text">Total_solved: <strong style="color: black;">{{ leetcode.total_solved }}</strong></span>
            <span class="text">Easy_solved: <strong style="color: black;">{{ leetcode.easy_solved }}</strong></span>
          </div>
          <div class="right">
            <span class="text">Medium_solved: <strong style="color: black;">{{ leetcode.medium_solved }}</strong></span>
            <span class="text">Hard_solved: <strong style="color: black;">{{ leetcode.hard_solved }}</strong></span>
          </div>
        </div>
      </div>


      <!-- Luogu -->
      <div class="box">
        <img v-if="showLuoguImage" :src="luogu.avatarUrl" height="90px" width="100px" alt="" />
        <div class="title">Luogu</div>
        <div class="input">
          <input type="text" v-model="LuoGutempValue" @keyup.enter="showLuoguContent" />
          <button @click="showLuoguContent">确认</button>
        </div>
        <div class="attribute">
          <div class="left">
            <span class="text">fans: <strong style="color: black;">{{ luogu.fans }}</strong></span>
            <span class="text">hasSumbitted: <strong style="color: black;">{{ luogu.hasSumbitted }}</strong></span>
          </div>
          <div class="right">
            <span class="text">hasPassed: <strong style="color: black;">{{ luogu.hasPassed }}</strong></span>
            <span class="text">ranking: <strong style="color: black;">{{ luogu.ranking }}</strong></span>
          </div>
        </div>
      </div>





      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nowcoder:
      {
        showNowCoderImage: false,
        name: '牛客',
        rating: '',
        ratingRank: '',
        competitionCount: '',
        hasPassedProblem: '',
        avatarBase64: '',  // 这里存放从后端获取的Base64编码的头像数据
        avatarUrl: ''
      },
      leetcode:
      {
        showLeetCodeImage: false,
        name: 'Leetcode',
        total_solved: '',
        easy_solved: '',
        medium_solved: '',
        hard_solved: ''
      },
      luogu:
      {
        showLuoguImage: false,
        name: 'Luogu',
        fans: '',
        hasSumbitted: '',
        hasPassed: '',
        ranking: ''
      }

    }
  },
  methods: {
    showNowCoderContent() {
      this.showNowCoderImage = true;
      this.$axios.get('/api/nowcoder/info/' + this.NowCodertempValue)
        .then(response => {
          this.nowcoder.rating = response.data.rating
          this.nowcoder.ratingRank = response.data.ratingRank
          this.nowcoder.competitionCount = response.data.competitionCount
          this.nowcoder.hasPassedProblem = response.data.hasPassedProblem
          this.nowcoder.avatarBase64 = response.data.avatar
          this.nowcoder.avatarUrl = 'data:image/png;base64,' + this.nowcoder.avatarBase64


        })
        .catch(error => {
          console.error(error);
        });
    },
    // --------------------------------------------
    showLeetCoderContent() {
      this.showLeetCodeImage = true;
      this.$axios.get('/api/leetcode/info/' + this.LeetCodetempValue)
        .then(response => {
          // this.nowcoder = response.data
          this.leetcode.easy_solved = response.data.easy_solved
          this.leetcode.medium_solved = response.data.medium_solved
          this.leetcode.hard_solved = response.data.hard_solved
          this.leetcode.total_solved = response.data.total_solved
          this.leetcode.avatarBase64 = response.data.avatar
          this.leetcode.avatarUrl = 'data:image/png;base64,' + this.leetcode.avatarBase64

        })
        .catch(error => {
          console.error(error);
        });
    },

    showLuoguContent() {
      this.showLuoguImage = true;
      this.$axios.get('/api/luogu/info/' + this.LuoGutempValue)
        .then(response => {

          this.luogu.fans = response.data.fans
          this.luogu.hasSumbitted = response.data.hasSumbitted
          this.luogu.hasPassed = response.data.hasAccepted
          this.luogu.ranking = response.data.Ranking


        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}

</script>


<style scoped>
.total {
  display: flex;
  flex-direction: column;
}

.head {
  width: 100%;
  height: 80px;
  box-shadow: 2px 2px 5px rgba(55, 54, 54, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
}

.xx {
  color: #a9a9a9;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: first-start;
}

.box {
  flex: 1;
  width: 540px;
  height: 280px;
  display: flex;
  margin: 100px 200px 40px 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  width: calc((100%-500px) / 2);
  min-width: calc((100% - 500px) /2);
  max-width: calc((100% - 500px) /2);

  &:nth-child(2n) {
    margin-left: 0px;
  }

}

.title {
  margin-top: 0;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
}

.attribute {
  margin-top: 0px;
  display: flex;
}

.left {
  display: flex;
  flex-direction: column;
  margin-left: 0;
}

.right {
  display: flex;
  flex-direction: column;
  margin-left: 100px;
}

.text {
  font-size: 14px;
  margin-top: 20px;
  color: #A9A9A9
}
</style>
