n=int(input("enter the lenght of the array"))
arr=[]
for  i in range(n):
    n1=int(input("enter value"))
    arr.append(n1)
            
l=[]
sum=0
for i in range(n):
    if i%2==0:
        l.append(arr[i])
print(l)
for i in range(len(l)):
    sum+=l[i]
print(sum)
