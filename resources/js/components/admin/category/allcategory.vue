<template>
    <div>


    <!-- Main content -->
    <section class="content pt-4">
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-8 offset-md-2">
                        <div class="card">
              <div class="card-header">
                <h3 class="card-title mt-2" >Category Table</h3>
                <div class="card-tools">
                    <router-link to='/add-category' class="btn btn-info btn-sm" style="color:white">Add Category</router-link>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th >Sl no</th>
                      <th >Name</th>
                      <th >Slug</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(category, index) in categories" :key="category.id">
                      <td>{{++index}}</td>
                      <td>{{category.name}}</td>
                      <td>{{category.slug}}</td>
                      <td><span class="badge" :class="StatusColor(category.status)">{{statusName(category.status)}}</span></td>
                      <td>
                          <!-- <button type="button" class="btn btn-info btn-sm">Edit</button> -->
                          <router-link :to="`/edit-category/${category.id}`" class="btn btn-info btn-sm">Edit</router-link>
                           <button type="button" class="btn btn-danger btn-sm" @click="remove(category.id)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch("getCategory");
        },
        computed:{
            categories(){
                return this.$store.getters.categories;
            }
        },
        methods:{
            statusName:function(status){
                let data={0:"Inactive",1:"Active"}
                return data[status];
            },
            StatusColor:function(status){
                let data={0:" bg-danger",1:" bg-success"}
                return data[status];
            },
            remove:function(id){
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
                    axios.get('/remove-category/'+id).then((response)=>{
                    this.$store.dispatch("getCategory");
                    // Toast.fire({
                    // icon: 'error',
                    // title: 'Delete successfully',
                    // })
                    // toastr.info('Category Added Sucessfully.', {timeOut: 5000})
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
             }).catch(()=>{
          })
         }
      })
    }
  }
}
</script>
