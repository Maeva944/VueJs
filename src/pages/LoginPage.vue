<template>
    <main>Login Page</main>
    <form v-on:submit.prevent="submitHandler">
        <section>
            <article>
                <label for="email">Email</label>
                <input id="email"
                v-model="data.email"
                placeholder="email@email.com"
                type="email"
                class="input"/>
            </article>
        </section>
        <section>
            <article>
                <label for="password">Password</label>
                <input id="password"
                v-model="data.password"
                type="password"
                placeholder="Entrez votre password"
                class="input"/>
            </article>
        </section>
        <section>
            <button type="submit" class="button is-primary">Valider</button>
            <button type="reset" class="button is-danger">Réinitialiser</button>
        </section>
    </form>
</template>
<script setup lang="ts">
import { reactive, watch } from "vue"
import { useRouter } from "vue-router"
const router = useRouter()

const data = reactive({
    email: "",
    password: ""
})

watch(data, (val) => {
    console.log('Changement dans la variable data')
})

const isUserInputValid = (input:string): boolean => {
    const pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return pattern.test(input);
}
if(isUserInputValid("frdrfesrd.%*µ€$*@à^ç\\__`èèè|-~~@g.com")){
    console.log("ça marche hehe")
}else {
    console.log("oula tu croyais quoi la ? ")
}

const isRobustPassword = (input:string): boolean => {
    const pattern2 = new RegExp(/^(?=.*[A-Z]) (?=.*[a-z])(?=.*\d)(?=.*[@#$:%*!?&]))
}
const submitHandler = async() => {
    const result = await fetch('users.json')
    const users = await result.json()
    console.log(users)

    const user = users.find((user:{email: string, password:string}) => user.email === email)
    if(!user){
        alert('user not found')
        return
    }
    if(!(users.password === password.value)){
        alert('mauvais mot de passe')
    }
}

router.push('session/' + user.id)
const inputHandler = function() {

}
</script>