<template>
    <div class="col-sm-4 col-lg-4 col-md-4 item" :class="{'list-group-item': displayList}">
        <div class="thumbnail ">
            <img :src="item.thumbnail_url" alt="" class="grow thumbnail-image">
            <div class="caption margin-left-sm">
                <router-link :to="'/product/' + item.id" tag="h4"><a>{{ item.title }}</a></router-link>
                <p class="truncate">{{ item.description | shortDescription}}</p>
            </div>
            <div class="ratings margin-left-sm">
                <p class="pull-right">
                    <button v-if="!isInCart"
                        class="btn btn-success"

                        @click="addItem">
                        Add to cart
                    </button>
                    <button v-else
                        class="btn btn-warning"

                        @click="removeItem">
                        Remove from cart
                    </button>
                </p>
                <div class="clearfix"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        props: ['item', 'displayList'],
        computed: {
          isInCart() {
            console.log(this.$store)
            console.log(this.$store.state.cart.cartItemList)
            return this.$store.state.cart.cartItemList.filter(item => {
              return this.item.id === item.id
            }).length > 0
          }
        },
        methods: {
            ...mapActions(['updateCart', 'removeItemInCart']),
            addItem() {
                const order = {
                    item: Object.assign({}, this.item),
                    isAdd: true
                };
                console.log(order);
                this.updateCart(order);
            },
            removeItem() {
              this.removeItemInCart({
                item: this.item
              })
            }
        },
        filters: {
            shortDescription(value) {
                if (value && value.length > 100) {
                    return value.substring(0, 100) + '...';
                } else {
                    return value;
                }
            }
        }
    }
</script>

<style scoped>
    div.thumbnail {
        height: 100%;
    }
    .favourite-icon {
        font-size: 25px;
    }
    .ratings {
        padding-right: 10px;
        padding-left: 10px;
        color: #d17581;
    }

    .grow {
        transition: all .2s ease-in-out;
    }
    .thumbnail:hover .grow {
        transform: scale(1.1);
    }

    .item.list-group-item {
        border: none;
        float: none;
        width: 100%;
        background-color: #fff;
        margin-bottom: 10px;
    }

    .thumbnail-image {
        padding: 15px;
    }
    .list-group-item .thumbnail-image {
        margin-right: 10px;
        max-height: 150px;
    }

    .item.list-group-item .thumbnail {
        margin-bottom: 0px;

    }

    .item.list-group-item img {
        float: left;
    }

    .item.list-group-item:after {
        clear: both;
    }
</style>
