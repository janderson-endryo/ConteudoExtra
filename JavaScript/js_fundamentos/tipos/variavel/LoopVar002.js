var funci = []

for(var i = 0; i < 10; i++) {
    funci.push(() => console.log(i))
}

funci[2]()
funci[7]()