<template>
    <div>
        <div class="row" v-for="(item,index) of roomlist" :key="index">
            <div class="col">
                <roomone :data="item"></roomone>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <roomadd></roomadd>
            </div>
        </div>
    </div>
</template>

<script>
import roomadd from "./roomadd.vue";
import roomone from "./roomone.vue";

export default {
  data() {
    return {
      roomlist: [
        {
          title: "总群",
          content: "交流用",
          people: 25
        },
        {
          title: "总群",
          content: "交流用",
          people: 25
        }
      ]
    };
  },
  components: {
    roomadd,
    roomone
  },
  mounted() {
    let getCookie = function(name) {
      let arr = document.cookie.split("="),
        value;

      arr.forEach(function(item, index) {
        if (item.indexOf(name)) {
          value = index;
        }
      });

      return arr[value];
    };

    axios
      .get("http://localhost:3000/home", {
        headers: {
          auth: getCookie("token")
        }
      })
      .then(res => {
        //   this.roomlist = res.data.roomlist;
        console.log(res.data);
      });
  }
};
</script>

