let funci = []

for(let i = 0; i < 10; i++) {
    funci.push(() => console.log(i))
}

funci[0]()
funci[1]()

