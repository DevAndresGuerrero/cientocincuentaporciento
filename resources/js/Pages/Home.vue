<template>
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-12 col-md-10 col-lg-8 col-xl-6">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-header">
            <div class="d-flex">
                <label for="number" class="col-form-label">
                  Digite Numero:
                </label>
                <input
                  type="text"
                  id="number"
                  class="form-control col-1 mx-2"
                  v-model="number">
                <button
                  type="button"
                  class="btn btn-success"
                  @click="drawTable">
                  Rombotizar
                </button>
            </div>
          </div>
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="p-2">
                  <table class="table table-bordered">
                    <!-- For A -->
                    <tr v-for="(a, id1) in number" :key="id1">

                      <!-- For B -->
                      <td
                        class="text-center"
                        v-for="(b, id2) in number" :key="id2">
                        <div v-if="a <= Math.round(number/2)">
                          <div v-if="a == c && (b>=il && b<=ir)">
                            #
                          </div>
                          <div v-else>
                            &nbsp;
                          </div>
                        </div>
                        <div v-else>
                          <div v-if="a == c && (b>=il && b<=ir)">
                            #
                          </div>
                          <div v-else>
                            &nbsp;
                          </div>
                        </div>
                      </td>
                      <!-- End For B -->

                    </tr>
                    <!-- End For A -->
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'});
      }
    },
    data() {
      return {
        number: 10,
        user:"ANDRES",
        l:"",
        t:0,
        c:1,
        d:0,
        i:0,
        il:0,
        ir:0,
        matriz: [],
      }
    },
    mounted() {
      this.i = Math.round(this.number/2);
      this.il = this.i;
      this.ir = this.i;
      this.drawTable();
    },
    methods: {
      drawTable(){
        let indice = Math.round(this.number/2);
        let il = indice;
        let ir = indice;

        for (let a=1; a<=this.number; a++) {
          for (let b=1; b<=this.number; b++) {
            if(this.t==this.user.length){
              this.t=0;
            }
            this.l=this.user[this.t];

            if(a<=indice){
              if (a==this.c && (b>=il && b<=ir)) {
                this.matriz[a][b] = this.l;
                this.t++;
              } else {
                this.matriz[a][b] = " ";
              }
            } else {
              if (a==this.c && (b>=il && b<=ir)) {
                this.matriz[a][b] = this.l;
                this.t++;
              } else {
                this.matriz[a][b] = " ";
              }
            }
          }

          this.c++;
          this.d++;
          if(this.d<indice){
            il--;
            ir++;
          } else {
            il++;
            ir--;
          }
        }

        return this.matriz;
      }
    },
  }
</script>
