export const addToLocalStorage=(savedImages, userName)=>{
    localStorage.setItem(`savedImages${userName}`, JSON.stringify(savedImages))
    console.log('image saved');
}


export const checkLocalStorage=(userName)=>{
    let savedImages= localStorage.getItem(`savedImages${userName}`)
    savedImages= JSON.parse(savedImages)
    if(!savedImages) return false
    return true
}

export const getSavedImages=(userName)=>{
    let savedImages= localStorage.getItem(`savedImages${userName}`)
    savedImages= JSON.parse(savedImages)
    return savedImages
}

export const saveImageURL=(url, userName)=>{
    let savedImages= localStorage.getItem(`savedImages${userName}`)
    savedImages= JSON.parse(savedImages)
    savedImages.push(url)
    localStorage.setItem(`savedImages${userName}`, JSON.stringify(savedImages))
}

export const saveRecentImagesURL=(imageArray)=>{
    localStorage.setItem(`recentImages`, JSON.stringify(imageArray))
    console.log('array saved');
}