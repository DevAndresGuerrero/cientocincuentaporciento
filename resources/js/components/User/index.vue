<template>
  <div>
    <div class="row mb-3">
      <div class="col-12">
        <router-link :to="{ name: 'userCreate' }" class="btn btn-primary">
          Add User
        </router-link>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <div class="d-flex justify-content-between align-items-center">
              <h6 class="m-0 font-weight-bold text-primary">List of Users</h6>
              <input type="text" class="form-control col-2" placeholder="Search..." v-model="search">
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                id="dataTable"
                class="table table-bordered"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created</th>
                    <th>Updated</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr v-for="user in filterSearch" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.created }}</td>
                    <td>{{ user.updated }}</td>
                    <td>
                      <router-link
                        :to="{name:'userEdit', params: { id:user.id }}"
                        class="btn btn-sm btn-primary">
                        Edit
                      </router-link>
                      <a
                        class="btn btn-sm btn-danger"
                        @click.prevent="deleteUsers(user.id)">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserIndex",
    created(){
      if (!User.loggedIn()) {
        this.$router.push({name: '/'});
      }
      this.allUsers();
    },
    data() {
      return {
        users: [],
        search: ''
      }
    },
    methods: {
      allUsers(){
        axios.get('/api/users')
          .then(({data}) => this.users = data.data)
          .catch(err => console.log(err))
      },
      deleteUsers(id){
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete('/api/users/'+id)
              .then(()=>{
                this.users = this.users.filter(user => {
                  return user.id != id
                })
              })
              .catch(()=>{
                this.$router.push({name:'userIndex'})
              });

            Swal.fire(
              'Deleted!',
              'User has been deleted.',
              'success'
            )
          }
        });
      }
    },
    computed: {
      filterSearch(){
        return this.users.filter(user => {
          return user.name.match(this.search) || user.email.match(this.search)
        })
      }
    }
  };
</script>

<style></style>
