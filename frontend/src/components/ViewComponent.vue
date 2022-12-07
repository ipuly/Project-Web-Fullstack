<template>
    <div>
        <div class="container" v-show="success">
            <SuccessComponentVue />
        </div>
        <div v-show="!success">
            <div class="d-flex flex-row justify-content-between align-items-center">
                <router-link to="/add" class="ml-3">
                    <button class="btn btn-primary font-weight-bold mt-3"><font-awesome-icon icon="fa-solid fa-user-plus" /> Add Data</button>
                </router-link>
                <div class="d-flex flex-row mr-3 mt-3">
                    <input v-model="search" class="form-control mr-sm-2" type="search" placeholder="Search">
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
            
            <div class="row my-3 mx-1">
                <h3 v-if="studentsData.length == 0">Tidak ada Data</h3>
                <div class="col-md-4 col-sm-12 mb-3" v-for="item in filterStudents" :key="item.id" style="border-radius: 20px;">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="card-title">
                                    {{ item.nama }}, {{ item.umur }} Years Old
                                </h5>
                                <div>
                                    <font-awesome-icon class="gender_male" v-if="item.jenis_kelamin == 'Male'" icon="fa-solid fa-mars" />
                                    <font-awesome-icon class="gender_female" v-else-if="item.jenis_kelamin == 'Female'" icon="fa-solid fa-venus" />
                                </div>
                            </div>
                            <p class="card-text mb-2">{{ item.deskripsi_diri }}</p>
                            <table class="mb-3">
                                <tr>
                                    <td width="100px">Email</td>
                                    <td>:&nbsp;{{ item.email }}</td>
                                </tr>
                                <tr>
                                    <td>Soft Skills</td>
                                    <td>:&nbsp;{{ item.soft_skill }}</td>
                                </tr>
                                <tr>
                                    <td>Hard Skills &nbsp;</td>
                                    <td>:&nbsp;{{ item.hard_skill }}</td>
                                </tr>
                                <tr>
                                    <td>Interest</td>
                                    <td>:&nbsp;{{ item.interest }}</td>
                                </tr>
                            </table>

                            <div>
                                <router-link :to="{ path: '/update/' + item.id }">
                                    <button class="btn btn-primary btn-block mb-1">
                                        <font-awesome-icon icon="fa-solid fa-user-pen" /> Update</button>
                                </router-link>
                                <router-link to="/">
                                    <button class="btn btn-danger btn-block" @click="deleteStudentsFunction(item.id, item.nama)">
                                        <font-awesome-icon icon="fa-solid fa-user-xmark" /> Delete
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import studentsServices from '@/services/studentsServices';
import SuccessComponentVue from './SuccessComponent.vue';

export default {
    name: 'ViewComponent',
    data() {
        return {
            studentsData: [],
            success: false,
            search: ''
        };
    },
    methods: {
        getStudents() {
            studentsServices.getAll()
                .then((response) => {
                    this.studentsData = response.data;
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        deleteStudentsFunction(id, nama) {
            if (confirm(`Apakah anda yakin hapus data ${nama} ?`)) {
                studentsServices.deleteStudents(id)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(e => {
                        console.log(e);
                    });
                this.success = true;
            } else {
                alert("Hapus dibatalkan!")
            }
        },
    },
    mounted() {
        this.getStudents();
    },
    components: {
        SuccessComponentVue,
    },
    computed: {
        filterStudents(){
            return this.studentsData
            .filter(item => item.nama.toLowerCase().includes(this.search.toLowerCase()));
            // return this.studentsData.filter((item) => {
            //     return item.nama.match(this.search);
            // }),
        }
    },
};
</script>

<style>

</style>