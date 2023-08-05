<template>
    <div>
        <h1 v-for="product in products" :key="product.id" >{{ product }}</h1>
    </div>


</template>


<script>
export default {
    name : "ProductGood" ,
    data () {
        return {
            products : [
                {id : 1 , title : "LapTop", price : 700000},
                {id : 2 , title : "Phone", price : 800000},
                {id : 3 , title : "Pencil", price : 900000},
                {id : 4 , title : "Pen", price : 2000},
                {id : 5 , title : "Glass", price : 30000},
            ]
        }
    }

}


</script>



<style scoped>


</style>