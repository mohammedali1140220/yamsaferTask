<template>
	 <nav class="navbar navbar-inverse" role="navigation">
        <div class="container nav-height">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Yamsafer Site</router-link>
            </div>
            <ul class="nav navbar-nav navbar-right">
		        <li>
                    <router-link to="/cart" class="btn btn-success navbar-btn cart-btn" tag="button">
                        Cart
                    </router-link>
            </li>
		     </ul>

        </div>
        <!-- /.container -->
    </nav>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        computed: {
            isLoggedInLocal() {
                return this.$store.getters.isLoggedIn;
            },
            numItems() {
                let res = 0;
                this.$store.getters.cartItemList.map((item, idx) => {
                    res += item.quantity;
                });
                return res;
            },
            userEmail() {
                if (this.isLoggedInLocal) {
                    return this.$store.getters.currentUser.email;
                } else {
                    return '';
                }
            },
            cartValueLocal() {
                return this.$store.getters.cartValue;
            }
        },
         methods: {
           ...mapActions(['logout']),
          logoutLocal() {
            this.logout();
          }
        }
    }
</script>


<style scoped lange="sass">
		.cart-btn{
			width:60px;
			height:30px;
		}
		.nav-height {
				    height: 60px;
		}
    .navbar-btn a {
        color: white;
    }

    .li-pointer {
        cursor: pointer;
    }

    .li-pointer:hover {
        cursor: pointer;
    }
</style>
