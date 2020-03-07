- [カスタムタグやフィルタについて](https://docs.djangoproject.com/ja/3.0/howto/custom-template-tags/)


カスタムタグ　アプリはINSTALLLED_APPSに記述
<br />↓<br />

```python
from django import template

register = template.Library()
```
<br />↓<br />
{% load poll_extras(モジュール名) %}

---

- models 変換例

```python
class Group(models.Model):
    # A slug is the part of a URL which identifies a particular page
    slug = models.SlugField(allow_unicode=True,unique=True)
    description_html = models.TextField(editable=False,blank=True,default='')
    #  Provide a many-to-many relation by using an intermediary model that
    #  holds two ForeignKey fields pointed at the two sides of the relation.
    # 双方向の外部キー
    member = models.ManyToManyField(User,through='GroupMember')

    def __str__(self):
        return self.name

    def save(self,*args,**kwargs):
        self.slug = slugify(self.name)
        # misaka is a fast markdown processing library(process description to description_html)
        self.description_html = misaka.html(self.description)
        # 親からsave引き継ぐ
        super().save(*args,**kwargs)
    
        def get_absolute_url(self):
            # slugに基づきリダイレクト
        return reverse('groups:single', kwargs={'slug': self.slug})
```
